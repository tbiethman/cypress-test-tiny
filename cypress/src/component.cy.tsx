import React from 'react'
import { mount } from 'cypress/react'

describe('CT', { viewportHeight: 400 }, () => {
  it('mounts something', () => {

    mount((
      <div>
        Hello World
      </div>
    ))

    cy.contains('Hello World').should('be.visible')
  })
})
