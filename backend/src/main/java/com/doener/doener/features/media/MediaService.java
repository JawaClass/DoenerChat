package com.doener.doener.features.media;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.doener.doener.shared.services.BaseCrudService;

import lombok.AllArgsConstructor;

@Service
public class MediaService extends BaseCrudService<Media, Long> {

    private static final Logger logger = LoggerFactory.getLogger(MediaService.class);

    protected MediaService(MediaRepository mediaRepository) {
        super(mediaRepository);
    }

}
