mod app;
mod database;
mod logger;
mod schemas;

use std::sync::Mutex;

use once_cell::sync::Lazy;
use postgres::Client;

use app::commands;

static DB: Lazy<Mutex<Option<Client>>> = Lazy::new(|| Mutex::new(None));

pub fn run() {
    tauri::Builder::default()
        .plugin(logger::init().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            commands::open_db_conn,
            commands::get_list_of_db,
            commands::close_db_conn,
        ])
        .run(tauri::generate_context!())
        .unwrap()
}
