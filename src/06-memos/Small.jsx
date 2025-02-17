import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log("I get re-render :(");
    return <small>{value}</small>;
});

Small.displayName = "Small";
