package com.doener.doener.features.merchant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.doener.doener.shared.http.HttpResponseFilter;

@Service
public class MerchantService {

    private static final Logger logger = LoggerFactory.getLogger(MerchantService.class);

    private final MerchantRepository merchantRepo;

    public MerchantService(MerchantRepository merchantRepo) {
        this.merchantRepo = merchantRepo;
    }

    public Merchant createMerchant(String name) {
        Merchant merchant = new Merchant();
        merchant.setName(name);
        logger.info("Creating merchant with name: {}", name);
        return merchantRepo.save(merchant);
    }

    public Iterable<Merchant> getAllMerchants() {
        logger.info("Fetching all merchants");
        return merchantRepo.findAll();
    }
 
    public Merchant getMerchantById(Long id) {
        logger.info("Fetching merchant with ID: {}", id);
        return merchantRepo.findById(id).orElse(null);
    }
}
