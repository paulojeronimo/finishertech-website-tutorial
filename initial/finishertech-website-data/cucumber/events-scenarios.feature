Feature: Events management
	Scenario: Creating events from an existing file
		Given I have an existing file with two events registered
		When I import this file
		Then two event should be imported
