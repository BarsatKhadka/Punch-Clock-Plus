package com.punchClock.project.Modals;

import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    String jwtToken;
    String message;
}
