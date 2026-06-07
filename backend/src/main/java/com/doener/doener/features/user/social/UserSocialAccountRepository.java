package com.doener.doener.features.user.social;

import org.springframework.data.repository.CrudRepository;
import com.doener.doener.features.user.registration.UserSocialAccount;

public interface UserSocialAccountRepository extends CrudRepository<UserSocialAccount, Long> {

}
