package com.bolinhx;

import com.bolinhx.persistence.migration.MigrationStrategy;
import com.bolinhx.ui.MainMenu;

import java.sql.SQLException;

import static com.bolinhx.persistence.config.ConnectionConfig.getConnection;
import static com.bolinhx.persistence.config.ConnectionConfig.getConnection;


public class Main {

    public static void main(String[] args) throws SQLException {
        try(var connection = getConnection()){
            new MigrationStrategy(connection).executeMigration();
        }
        new MainMenu().execute();
    }

}
