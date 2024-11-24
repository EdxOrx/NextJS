import { FC, useState } from 'react';
import { Tab } from './Tab';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';

const Tabs: FC = ({data}) => {
    const [tabs, setTabs] = useState(data);
    const [activeTab, setActiveTab] = useState(find(tabs, ['isActive', true]));

    const handleTabs = (tabName) => {
        setTabs((prev)=>{
            const newState = map(prev, (tab) => {
                if (tab?.name === tabName) {
                    tab.isActive = true;
                    setActiveTab(tab);
                }else{
                    tab.isActive = false;
                }

                return tab
            });
            
            return newState
        });
    }

    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul  className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {
                    !isEmpty(tabs) && map(tabs, (tab, id) => {
                        return <Tab key={id} title={tab?.name} isActive={tab?.isActive} onClick={handleTabs}/>;
                    })
                }
            </ul>
            {
                activeTab && map(activeTab?.data, (data) => {
                    return JSON.stringify(data);
                })
            }
        </div>
    );
}

export {Tabs};
