import React from 'react';
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";

function Evento({ id, texto, completada, completarEvento, eliminarEvento }) {
    return (
        <Box
            className={completada ? 'evento-contenedor completada' : 'evento-contenedor'}
            width="500px"
            minHeight="65px"
            backgroundColor={completada ? '#5a01a7' : '#1b1b32'}
            margin="5px 0"
            padding="8px 15px 8px 20px"
            borderRadius="7px"
            border="1px solid white"
            cursor="pointer"
            onClick={() => completarEvento(id)}
        >
            <Text fontSize="20px" overflowWrap="anywhere">
                {texto}
            </Text>
            <Flex className="evento-contenedor-icono" onClick={() => eliminarEvento(id)}>
                <IconButton as={AiFillDelete} className="evento-icono" />
            </Flex>
        </Box>
    );
}

export default Evento;
