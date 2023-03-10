export default {
  setFamilyPlans: (state, plans) => (state.familyPlans = plans),
  setSharedPlans: (state, plans) => (state.sharedPlans = plans),
  addToFamilyPlans: (state, newPlan) =>
    state.familyPlans.splice(state.familyPlans.length, 0, newPlan),
  removeFromFamilyPlans: (state, plan) => {
    const index = state.familyPlans.indexOf(plan);  
    if (index > -1) state.familyPlans.splice(index, 1);
  },
  replaceContact: (state, { contact, plan }) => {
    const index = plan.emergencyContacts.findIndex(i => i.id == contact.id);
    plan.emergencyContacts.splice(index, 1, contact);
  },
  addContact: (state, { contact, plan }) => {
    plan.emergencyContacts.splice(plan.emergencyContacts.length, 0, contact);
  },
  replaceRoute: (state, { route, plan }) => {
    const index = plan.routeLocations.findIndex(i => i.id == route.id);
    plan.routeLocations.splice(index, 1, route);
  },
  addRoute: (state, { route, plan }) => {
    plan.routeLocations.splice(plan.routeLocations.length, 0, route);
  },
  replaceChild: (state, { child, plan }) => {
    const index = plan.children.findIndex(i => i.id == child.id);
    plan.children.splice(index, 1, child);
  },
  addChild: (state, { child, plan }) => {
    plan.children.splice(plan.children.length, 0, child);
  },
  replacePet: (state, { pet, plan }) => {
    const index = plan.pets.findIndex(i => i.id == pet.id);
    plan.pets.splice(index, 1, pet);
  },
  addPet: (state, { pet, plan }) => {
    plan.pets.splice(plan.pets.length, 0, pet);
  },
  addPhotoToRoute: (state, { photo, route }) => {
    route.images.splice(route.images.length, 0, photo);
  },
  addPhotoToChild: (state, { photo, child }) => {
    child.image = photo;
  },
  addPhotoToPet: (state, { photo, pet }) => {
    pet.image = photo;
  }
};
