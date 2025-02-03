import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const useusersStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '23px',
    },
    input_field: {
        height: "32px",
        padding: "5px 10px",
        background: "red",
        width: '250px'
    },
    filters: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px'
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        gap: '8px',
        color: '#0968af'
    },
    tavle_container: {
        height: '71vh'
    },
    empty_data: {
        minHeight: '71vh'
    },
    dropdown_users: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
        maxWidth: "400px",
    }
});
