import React from 'react';
import {useStore} from '@nanostores/react';
import {counter} from '../stores/counter';

export default function CounterDisplay() {
    const counterValue = useStore(counter);

    return <div>{counterValue}</div>;
}
