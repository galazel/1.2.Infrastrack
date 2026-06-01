package com.infrastrack.backend.commons;

import com.infrastrack.backend.jwt.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthenticationManagement {  // ✅ removed unused <T>

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public String authenticateThenToken(AuthCredentials credentials) { // ✅ removed unused Role param
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            credentials.getEmail(),
                            credentials.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            return jwtUtils.generateToken(userDetails);

        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid email or password"); // ✅ proper exception
        } catch (Exception e) {
            throw new RuntimeException("Authentication failed: " + e.getMessage()); // ✅ don't return error as string
        }
    }
}