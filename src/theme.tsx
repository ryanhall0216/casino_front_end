import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E58929",  // yellow
        },
        secondary: {
          main: "#404040",
          light: "#4C4C4C"
        },
        warning: {
            main: "#FA9D26" //yellow
        },
        text: {
            primary: "#556e85" //light gray
        }
    }
    // components: {
    //     MuiFormControlLabel: {
    //         styleOverrides: {
    //             label: {
    //                 fontSize: "12px"
    //             }
    //         }
    //     },
    //     MuiFormLabel: {
    //         styleOverrides: {
    //             root: {
    //                 fontSize: "12px"
    //             }
    //         }
    //     },
    //     MuiSelect: {
    //         styleOverrides: {
    //             select: {
    //                 padding: "4.5px 14px"
    //             }
    //         }
    //     },
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 textTransform: "none",
    //                 fontSize: "11px",
    //                 margin: "0 15px",
    //                 borderRadius: "6px"
    //             }
    //         }
    //     },
    //     MuiSwitch: {
    //         styleOverrides: {
    //             root: {
    //                 margin: "0 4px !important"
    //             }
    //         }
    //     },
    //     MuiDialog: {
    //         styleOverrides: {
    //             container: {
    //                 background: "#B3B3B3"
    //             }
    //         }
    //     }
    // }
})

export default theme