export interface Ec {
    last_update:          string;
    name:                 string;
    alias:                null;
    tax_id:               string;
    type:                 string;
    founded:              string;
    size:                 string;
    capital:              number;
    email:                string;
    phone:                string;
    phone_alt:            string;
    federal_entity:       string;
    registration:         EcRegistration;
    address:              Address;
    legal_nature:         LegalNature;
    primary_activity:     LegalNature;
    secondary_activities: any[];
    membership:           Membership[];
    partnership:          any[];
    simples_nacional:     SimplesNacional;
    sintegra:             Sintegra;
    files:                Files;
    maps:                 Maps;
    assign:               string;
  }
  export interface Address {
    street:       string;
    number:       string;
    details:      string;
    zip:          string;
    neighborhood: string;
    city:         string;
    state:        string;
    city_ibge:    string;
    state_ibge:   string;
  }
  export interface Files {
    registration: string;
    membership:   string;
  }
  export interface LegalNature {
    code:        string;
    description: string;
  }
  export interface Maps {
    roads:     string;
    satellite: string;
    street:    string;
  }
  export interface Membership {
    name:   string;
    tax_id: string;
    role:   LegalNature;
  }
  export interface EcRegistration {
    status:              string;
    status_date:         string;
    status_reason:       string;
    special_status:      string;
    special_status_date: string;
  }
  export interface SimplesNacional {
    last_update:      string;
    simples_optant:   boolean;
    simples_included: boolean;
    simples_excluded: boolean;
    simei_optant:     boolean;
  }
  export interface Sintegra {
    last_update:             string;
    home_state_registration: string;
    registrations:           RegistrationElement[];
  }
  export interface RegistrationElement {
    number:  string;
    state:   string;
    enabled: boolean;
  }