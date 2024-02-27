import React from 'react'
import { render } from '@testing-library/react'
import Todo from './Todo'

describe('Todo', () => {
	let onClickDelete
	let onClickComplete
	let todo
	let TodoComponent
	
	test('it renders', () => {
		onClickDelete = jest.fn()
		onClickComplete = jest.fn()
		todo = {
			text: 'test',
			done: false
		}
		TodoComponent = render(<Todo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />)
		expect(TodoComponent).toBeTruthy()
	})

	test('not done by default', () => {
		onClickDelete = jest.fn()
		onClickComplete = jest.fn()
		todo = {
			text: 'test',
			done: false
		}
		TodoComponent = render(<Todo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />).container
		expect(TodoComponent).toHaveTextContent('This todo is not done')
	})
	
})