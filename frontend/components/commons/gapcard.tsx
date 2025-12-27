import { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


export default function GapCard({ key, header, icon, description }: {key: number, header: string, description: string, icon: JSX.Element}) {
    return (
        <Card key={key}>
            <CardHeader>{header}</CardHeader>
            <CardTitle>{icon}</CardTitle>
            <CardContent>{description}</CardContent>
        </Card>
    )
}