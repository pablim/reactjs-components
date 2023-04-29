import React, { ReactElement, useEffect, useState } from 'react';
// import { useIntl } from "react-intl";
import { List, Input } from 'antd';
import './style.css'

interface IFindListProps {
    siderData: Array<any>,
    renderSider: (item: any) => JSX.Element,
    findInField: string
}

const FindList: React.FC<IFindListProps> = ({
    siderData, 
    renderSider,
    findInField
}) => {
    // const intl = useIntl().formatMessage;
    const { Search } = Input
    const [filtered, setFiltered] = useState<any>()
    const [loading, setLoading] = useState<any>(false)

    useEffect(()=>{
        setFiltered(siderData)
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [filtered])

    const onSearch = (e:any) => {
        var term = e.target.value.toUpperCase()
        setLoading(true)

        setFiltered(
            siderData.filter((value)=>{
                if (value[findInField].toUpperCase().includes(term)) return value
            })
        )
    }
    
    return (
        <div className="findinlist-container" >
            <div className="label" >
                {/* <label >{intl({ id: "find_in_list_label" })} </label>
                <hr className="line"/> */}
                <Search className="search"
                    // placeholder={intl({ id: "search_label" })}
                    placeholder={"search_label"}
                    allowClear
                    loading={loading}
                    onInput={onSearch}
                />
            </div>
            <List className="list"
                size="small"
                dataSource={filtered}
                renderItem={renderSider}
            />
        </div>
    )
}

export default FindList