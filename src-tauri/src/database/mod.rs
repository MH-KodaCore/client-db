use std::error::Error;

use postgres::{Client, NoTls};

use crate::DB;

mod queries;

pub fn open_conn(conn_url: &str) -> Result<(), Box<dyn Error>> {
    let mut conn_guard = DB.lock()?;

    if conn_guard.is_some() {
        return Err("Already opened".into());
    }

    let conn = Client::connect(&conn_url, NoTls)?;

    *conn_guard = Some(conn);

    Ok(())
}

pub fn close_conn() -> Result<(), Box<dyn Error>> {
    let mut conn_guard = DB.lock()?;

    if let Some(client) = conn_guard.take() {
        client.close()?;
    }

    Ok(())
}

pub fn get_list_of_db() -> Result<Vec<String>, Box<dyn Error>> {
    let mut conn_guard = DB.lock()?;
    let client = conn_guard.as_mut().ok_or("No active DB connection")?;

    let rows = client.query(queries::LIST_OF_DB, &[])?;
    let db_names = rows.into_iter().map(|row| row.get("datname")).collect();

    Ok(db_names)
}
