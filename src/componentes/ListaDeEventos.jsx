import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import EventoFormulario from "./EventoFormulario";
import Evento from "./Evento";

function ListaDeEventos() {
    const [eventos, setEventos] = useState([]);

    const agregarEvento = (evento) => {
        if (evento.texto.trim()) {
            evento.texto = evento.texto.trim();
            const eventosActualizados = [evento, ...eventos];
            setEventos(eventosActualizados);
        }
    };

    const eliminarEvento = (id) => {
        const eventosActualizados = eventos.filter((evento) => evento.id !== id);
        setEventos(eventosActualizados);
    };

    const completarEvento = (id) => {
        const eventosActualizados = eventos.map((evento) => {
            if (evento.id === id) {
                evento.completada = !evento.completada;
            }
            return evento;
        });
        setEventos(eventosActualizados);
    };

    return (
        <Box>
            <EventoFormulario onSubmit={agregarEvento} />
            <Box className="evento-lista-contenedor">
                {eventos.map((evento) => (
                    <Evento
                        key={evento.id}
                        id={evento.id}
                        texto={evento.texto}
                        completada={evento.completada}
                        completarEvento={() => completarEvento(evento.id)}
                        eliminarEvento={() => eliminarEvento(evento.id)}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default ListaDeEventos;
