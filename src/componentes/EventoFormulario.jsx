import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

function EventoFormulario(props) {
    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

        const eventoNuevo = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(eventoNuevo);
    };

    return (
        <Box as="form" className='evento-formulario' onSubmit={manejarEnvio}>
            <Input
                className='evento-input'
                type='text'
                placeholder='Programa tu evento'
                name='texto'
                value={input}
                onChange={manejarCambio}
            />
            <Button className='evento-boton' type="submit">
                Agregar Evento
            </Button>
        </Box>
    );
}

export default EventoFormulario;
