import { MicrosoftGraphGroup } from "@microsoft/microsoft-graph-types";
import { useEffect, useState } from "react";

import "@microsoft/microsoft-graph-client/groups/group"
import "@microsoft/microsoft-graph-client/users"
import { useGraphClient } from "./hooks/useGraphClient";

export const Groups = () => {
    const graphRestClient = useGraphClient(['GroupMember.Read.All']);
    const [groups, setGroups] = useState<MicrosoftGraphGroup[]>();
    useEffect(() => {
        const loadGroups = async () => {

            const response = await graphRestClient.api("/groups").get();
            setGroups(response.value || []);
        }
        if (!groups) {
            loadGroups();
        }
    }, [graphRestClient, groups]);

    return (<>
        {groups?.map(g => (
            <div key={g.id}>{g.displayName}</div>
        ))}
    </>);
}