import React from 'react'
import { faker } from "@faker-js/faker";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import AlphabeticBar from '../lib/components/AlphabeticBar'

const AlphabeticBarPage = () => {

    const createUser = () => {
        return faker.name.fullName();
    }

    const createUsers = (qtde) => {
        return Array.from({length: qtde}, createUser)
    }

    const list = createUsers(500);

    const code = `<AlphabeticBar list={list}/>`
    const scope = { AlphabeticBar, list }

    return (
        <LiveProvider code={code} scope={scope}>
            <LiveEditor />
            <br />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    )
}

export default AlphabeticBarPage