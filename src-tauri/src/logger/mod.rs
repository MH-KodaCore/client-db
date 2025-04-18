use std::path::PathBuf;

use tauri_plugin_log::{Builder, Target, TargetKind};

pub fn init() -> Builder {
    Builder::new()
        .target(Target::new(TargetKind::Folder {
            path: PathBuf::from("./logs"),
            file_name: None,
        }))
        .level(log::LevelFilter::Error)
        .max_file_size(5_000) // bytes
}
