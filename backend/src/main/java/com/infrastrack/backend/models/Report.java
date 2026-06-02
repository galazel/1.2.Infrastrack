package com.infrastrack.backend.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "reports")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "report_key")
    private String key;

    private Long projectId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateCreated;
}
