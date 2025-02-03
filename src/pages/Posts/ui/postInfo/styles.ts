import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const usePostInfoStyles = makeStyles({
    controlsReadyBefore: {
        transition: "transform 0.3s ease, width 0.3s ease",
    },
    container: {
        // display: flex
        // fontFamily: 'monospace'
        fontWeight: '500'
    },
    post_title: {
        fontWeight: '600',
        fontSize: '17px',
    },
    name_key: {
        fontWeight: '600',
        fontSize: '15px',
        color: '#40464C',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    user_info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '11px'
    },
    info_div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export const drawer_background = {
    background: `${tokens.colorNeutralBackground3} !important`,
};

export const drawer_footer = {
    display: "flex",
    width: "-webkit-fill-available",
    justifyContent: "space-between !important",
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    button: {
        padding: "5px 12px",
        flex: "1 0 0",
    },

};
