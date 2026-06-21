package com.doener.doener.features.media;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doener.doener.shared.services.BaseCrudController;
import com.doener.doener.shared.services.BaseCrudService;

@RestController
@RequestMapping("/api/media")
public class MediaController extends BaseCrudController<Media> {

}
