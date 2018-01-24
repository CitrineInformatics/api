# Citrination API Specification
[![Build Status](https://travis-ci.org/CitrineInformatics/api.svg?branch=master)](https://travis-ci.org/CitrineInformatics/api)

- Documentation(ReDoc): https://citrineinformatics.github.io/api
- SwaggerUI: https://citrineinformatics.github.io/api/swagger-ui
- Full spec: https://citrineinformatics.github.io/api/openapi.yaml
- Preview spec for branch `[branch]`: YAML https://citrineinformatics.github.io/api/preview/[branch]


## Updating to the specification

### Contributions

Add workflow for contributing

### Conventions

* Avoid breaking changes unless absolutely necessary.
* Use semantic versioning for the API version number with the following meanings:
    * Revision: Changes to documentation or changes that otherwise do not affect behavior.
    * Minor: Added functionality or schema elements.
    * Major: Breaking changes.
* Assume that client libraries will be auto-generated based on this documentation.
    * Create directory structures that mirror package hierarchies.
    * Make sure to support strongly-typed languages by defining both type and format for variables (https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#dataTypes).
