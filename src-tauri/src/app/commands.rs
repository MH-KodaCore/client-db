use crate::{
    database::{self, close_conn, open_conn},
    schemas::request::connection::ConnectionRequest,
};

#[tauri::command]
pub fn open_db_conn(mut conn_url: ConnectionRequest) -> Result<(), String> {
    let conn_url = conn_url.parse();

    if let Err(error) = open_conn(&conn_url) {
        log::error!("Open DB connection: {error}");
        return Err(format!("Open DB connection: {error}"));
    };

    Ok(())
}

#[tauri::command]
pub fn close_db_conn() -> Result<(), String> {
    if let Err(error) = close_conn() {
        log::error!("Close DB connection: {error}");
        return Err(format!("Close DB connection: {error}"));
    }

    Ok(())
}

#[tauri::command]
pub fn get_list_of_db() -> Result<Vec<String>, String> {
    let res = database::get_list_of_db().map_err(|error| {
        log::error!("Get list of db: {error}");
        format!("Get list of db: {error}")
    })?;

    Ok(res)
}
