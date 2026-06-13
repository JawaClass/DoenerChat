package com.doener.doener.features.media;

import java.time.Instant;

import org.springframework.http.MediaType;

import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
public class Media extends TableDefaultEntity {

    private String storageKey;

    private String url;

    @Enumerated(EnumType.STRING)
    private MediaType type;

    private String mimeType;

    private Long fileSize;

    private Integer width;
    private Integer height;

    private Integer durationSeconds;

    private Instant uploadedAt;
}
