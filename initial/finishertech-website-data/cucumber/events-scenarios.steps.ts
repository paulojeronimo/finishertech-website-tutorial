import { loadFeature, defineFeature } from 'jest-cucumber'

defineFeature(loadFeature('cucumber/events-scenarios.feature'), test => {
	test('Creating events from an existing file', ({ given, when, then }) => {
		given('I have an existing file with two events registered', () => {
			pending()
		})
		when('I import this file', () => {
			pending()
		})
		then('two event should be imported', () => {
			pending()
		})
	})
})
