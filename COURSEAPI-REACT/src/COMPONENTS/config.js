// src/config.js
const config = {
  // Local Spring Boot Run (when using mvn spring-boot:run)
  LOCAL_API_BASE: "http://localhost:2030/courseapi",

  // Tomcat WAR Deployment (replace 'springbootcourseapi' with your WAR name)
  DEPLOYED_API_BASE: "http://localhost:2030/springbootcourseapi/courseapi",

  // Auto choose based on environment
  get API_BASE_URL() {
    return window.location.pathname.startsWith("/reactcourseapi")
      ? this.DEPLOYED_API_BASE
      : this.LOCAL_API_BASE;
  },
};

export default config;
