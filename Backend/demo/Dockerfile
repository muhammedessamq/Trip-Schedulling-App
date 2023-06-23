FROM openjdk:16
LABEL maintainer="tools.net"
EXPOSE 8080
ADD target/demo-0.0.1-SNAPSHOT.jar spring-boot-docker.jar
ENV DBPORT=3307
ENTRYPOINT ["java","-jar","spring-boot-docker.jar"]
