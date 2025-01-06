package com.entidade.config;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.mockito.Mockito.*;

class CorsConfigTest {

    @Test
    void corsConfigurerShouldAllowAllOrigins() {
        //Instancia o CorsConfig
        CorsConfig config = new CorsConfig();

        //Cria o mock para CorsRegistry e CorsRegistration
        CorsRegistry registry = mock(CorsRegistry.class);
        CorsRegistration registration = mock(CorsRegistration.class);

        //Configura o comportamento do mock
        when(registry.addMapping("/**")).thenReturn(registration);
        when(registration.allowedOrigins("http://localhost:3000")).thenReturn(registration);
        when(registration.allowedMethods("GET", "POST", "PUT", "DELETE")).thenReturn(registration);
        when(registration.allowedHeaders("*")).thenReturn(registration);

        //Executa o método que vai ser testado
        WebMvcConfigurer configurer = config.corsConfigurer();
        configurer.addCorsMappings(registry);

        //Verifica se os métodos foram chamados corretamente
        verify(registry).addMapping("/**");
        verify(registration).allowedOrigins("http://localhost:3000");
        verify(registration).allowedMethods("GET", "POST", "PUT", "DELETE");
        verify(registration).allowedHeaders("*");
    }
}
