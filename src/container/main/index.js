import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { STYLES } from "./styles";
import { Grid } from "@material-ui/core";
import CustomizedAccordions from '../../components/accordion';
import { getOkrsData } from './services';

const useStyles = makeStyles(() => STYLES);

export default function OKRS() {
    const classes = useStyles();
    const [okrData, setOKrData] = useState([]);

    /**
     * Side effect hook to get okrs data from api on component mount
     */
    useEffect(() => {
        getOkr();
        /* eslint-disable-next-line */
    }, []);

    /**
     * @function extractOkrs - Function to extract and set parent child objective data
     * @param {*array} data - Okrs array
     * @returns <array> - array of extracted parent child relations
     */
    const extractOkrs = (data) => {
        const extractedOkrs = data.map(okr => {
            let okrRelationObj = {};

            if (okr.parent_objective_id === '') {
                okrRelationObj.parent = okr;
                okrRelationObj.child = data.filter(ele => ele.parent_objective_id === okr.id);
            }

            return okrRelationObj;
        });
        
        return extractedOkrs.filter(value => Object.keys(value).length !== 0);
    }

    /**
     * @function getOkr - Function to call service for getting okr's list from server
     * Exytract and set data for populating accordions on UI
     */
    const getOkr = () => {
        getOkrsData().then((res) => {
            const okrs = extractOkrs(res.data);
            setOKrData(okrs);
        });
    }
    
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <CustomizedAccordions data={okrData} />
                </Grid>
            </Grid>
        </div>
    )
}