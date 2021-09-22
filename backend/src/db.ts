import Loki from 'lokijs'

export const db = new Loki('onboarding_flow_db')

export const users = db.getCollection('users') ?? db.addCollection('users');