// Auto-generated static image map for course module icons
// Each module maps to its icon extracted from the official PDF course

const COURSE_MODULE_IMAGES: Record<string, any> = {
  signalisation: require('../assets/icon_signaux_verticaux.jpg'),
  panneaux_interdiction: require('../assets/icon_panneaux_interdiction.jpg'),
  panneaux_obligation: require('../assets/icon_panneaux_obligation.jpg'),
  panneaux_information: require('../assets/icon_panneaux_direction.jpg'),
  feux_signalisation: require('../assets/icon_signaux_lumineux.jpg'),
  conducteur_vehicule: require('../assets/icon_eclairage_arabes.jpg'),
  equipement_securite: require('../assets/icon_eclairage_arabes.jpg'),
  vitesse_limites: require('../assets/icon_vitesse.jpg'),
  priorite: require('../assets/icon_priorite.jpg'),
  manoeuvres: require('../assets/icon_routes_traces.jpg'),
  stationnement: require('../assets/icon_stationnement.jpg'),
  securite: require('../assets/icon_routes_traces.jpg'),
  conditions_conduite: require('../assets/icon_routes_traces.jpg'),
  alcool_drogues: require('../assets/icon_crimes.jpg'),
  secourisme: require('../assets/icon_secourisme.jpg'),
  ecologie: require('../assets/icon_routes_traces.jpg'),
  entretien: require('../assets/icon_eclairage_arabes.jpg'),
  infractions: require('../assets/icon_crimes.jpg'),
  matieres_dangereuses: require('../assets/icon_matieres_dangereuses.jpg'),
  regles_transport_md: require('../assets/icon_matieres_dangereuses.jpg'),
  signalisation_md: require('../assets/icon_matieres_dangereuses.jpg'),
};

export const getCourseModuleImage = (moduleId: string): any => {
  return COURSE_MODULE_IMAGES[moduleId] || null;
};

export default COURSE_MODULE_IMAGES;
