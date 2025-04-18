use serde::Deserialize;

#[derive(Deserialize, Clone)]
pub struct ConnectionRequest {
    pub host: String,
    pub port: String,
    pub user: String,
    pub password: String,
    pub db_name: String,
}

impl ConnectionRequest {
    pub fn parse(&mut self) -> String {
        if self.host.is_empty() {
            self.host = "localhost".to_owned();
        }

        if self.port.is_empty() {
            self.port = "5432".to_owned();
        }

        if self.user.is_empty() {
            self.user = "postgres".to_owned();
        }

        if self.password.is_empty() {
            self.password = "".to_owned();
        }

        if self.db_name.is_empty() {
            self.db_name = "postgres".to_owned();
        }

        format!(
            "host={} port={} user={} password={} dbname={}",
            self.host, self.port, self.user, self.password, self.db_name
        )
    }
}
