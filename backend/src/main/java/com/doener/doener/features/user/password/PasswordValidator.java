package com.doener.doener.features.user.password;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;

@Component
public class PasswordValidator {

    enum PasswordDeniedCode {
        IS_NULL, TOO_SHORT, TOO_LONG, UPPERCASE_MISSING, NUMBER_MISSING, SPECIAL_CHAR_MISSING
    }

    @Data
    @AllArgsConstructor
    class PasswordDeniedReason {
        private final PasswordDeniedCode reasonCode;
        private final String message;
    }

    interface IPasswordAllowed {

        public boolean isAllowed();

    }

    @Data
    class PasswordAllowedResult implements IPasswordAllowed {

        @Override
        public boolean isAllowed() {
            return true;
        }

    }

    @Data
    @AllArgsConstructor
    class PasswordDeniedResult implements IPasswordAllowed {

        List<PasswordDeniedReason> reasons;

        @Override
        public boolean isAllowed() {
            return false;
        }

    }

    public IPasswordAllowed validate(String pw) {

        var deniedReasons = new ArrayList<PasswordDeniedReason>();

        if (pw == null) {
            var reason = new PasswordDeniedReason(PasswordDeniedCode.IS_NULL, "User.Password.Denied.Reason.IsNull");
            deniedReasons.add(reason);
            return new PasswordDeniedResult(deniedReasons); // early return
        }
        if (pw.length() < 10) {
            var reason = new PasswordDeniedReason(PasswordDeniedCode.TOO_SHORT, "User.Password.Denied.Reason.TooShort");
            deniedReasons.add(reason);
        }
        if (pw.length() > 100) {
            var reason = new PasswordDeniedReason(PasswordDeniedCode.TOO_LONG, "User.Password.Denied.Reason.TooLong");
            deniedReasons.add(reason);
        }
        if (!pw.matches(".*[A-Z].*")) {
            var reason = new PasswordDeniedReason(PasswordDeniedCode.UPPERCASE_MISSING,
                    "User.Password.Denied.Reason.AlphabeticUppaerCaseMissing");
            deniedReasons.add(reason);
        }
        if (!pw.matches(".*[0-9].*")) {
            var reason = new PasswordDeniedReason(PasswordDeniedCode.NUMBER_MISSING,
                    "User.Password.Denied.Reason.NumberMissing");
            deniedReasons.add(reason);
        }
        if (!pw.matches(".*[!@#$].*")) {
            var reason = new PasswordDeniedReason(PasswordDeniedCode.SPECIAL_CHAR_MISSING,
                    "User.Password.Denied.Reason.SpecialCharMissing");
            deniedReasons.add(reason);
        }

        return deniedReasons.isEmpty() ? new PasswordAllowedResult() : new PasswordDeniedResult(deniedReasons);

    }

}