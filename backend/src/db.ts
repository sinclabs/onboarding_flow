import Loki from 'lokijs'

export const db = new Loki('onboarding_flow_db', {
    autoload: true,
    autosave: true,
    autosaveInterval: 1000,
})

export const users = db.getCollection('users') ?? db.addCollection('users');