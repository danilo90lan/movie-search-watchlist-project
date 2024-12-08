import React from "react";
import { useNotification } from "../context/NotificationContext";

export default function NotificationBar() {
    const { notification } = useNotification();

    if (!notification) {
        return null;
    }

    return (
        <div className="notification">
            {
            notification
            }
        </div>
    )
}