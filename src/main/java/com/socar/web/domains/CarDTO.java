package com.socar.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Lazy
@Data
public class CarDTO {
	@Getter @Setter private int rentAmt, driveAmt, carSeq;
	@Getter @Setter private String carType, oilType, carOption, socarZone, carImg;
}
