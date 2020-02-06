import React from 'react';
interface ClientProps {
    name: string;
    id: string;
    slug: string;
    removeUser: (id: any) => void;
}
declare const Client: React.FC<ClientProps>;
export default Client;
