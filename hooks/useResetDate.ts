import { useState, useEffect } from 'react'

// date will be an date object
export const useResetDate = ({ date }: { date: Date }) => {

	const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
	const dias = ['Sun', 'Mon', 'Wen', 'Tur', 'Thu', 'Fri', 'Sat']

	const [resetDate, setResetDate] = useState('')
	
	useEffect(()=>{
		setResetDate(`${days[date.getDay()]}, ${date.toDateString().slice(8, 10)} de ${months[date.getMonth()-1]} del ${date.getFullYear()}`)
	},[])	

	return resetDate
}