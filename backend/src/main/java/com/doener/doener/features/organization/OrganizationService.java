package com.doener.doener.features.organization;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.doener.doener.shared.services.BaseCrudService;

@Service
public class OrganizationService extends BaseCrudService<Organization, Long, OrganizationRepository> {

    private static final Logger logger = LoggerFactory.getLogger(OrganizationService.class);

    protected OrganizationService(OrganizationRepository repository) {
        super(repository);
    }

}
