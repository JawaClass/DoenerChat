package com.doener.doener.features.media;

import java.time.Instant;

import org.springframework.http.MediaType;

import com.doener.doener.features.organization.Organization;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class Media extends TableDefaultEntity {

    public static enum MediaType {
        IMAGE,
        VIDEO,
    }

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

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false)
    private Organization organization;
}
