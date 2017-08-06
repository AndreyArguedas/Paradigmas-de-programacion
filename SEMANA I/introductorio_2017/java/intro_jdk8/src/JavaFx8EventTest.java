/**
<p> Pequeño ejemplo usando JavaFX8  con Eventos usando lambda (jdk8)
@author Carlos Loría-Sáenz
@since 2016
*/
package eif400fp.demo.javafx8;

import javafx.application.Application;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class JavaFx8EventTest extends Application {
	private int counter = 0;
	private Button btn;
	

	@Override
	public void start(Stage primaryStage) {
		// panel
		Pane rootPane = new Pane();

		// scene
		Scene scene = new Scene(rootPane, 400, 400);
		primaryStage.setTitle("Stage using lambda");
		primaryStage.setScene(scene);

		// button 
		btn = new Button();
		rootPane.getChildren().add(btn);
		btn.setText(this.counter + " ");
		btn.setLayoutX(200);
		btn.setLayoutY(20);
		// Css
		btn.setStyle("-fx-background-color: lightgreen;");
        // Handler
		btn.addEventHandler(ActionEvent.ACTION, e -> {
                        this.counter ++;
						btn.setText(this.counter + " ");
		});

		primaryStage.show();
}

	public static void main(String[] args) {
		launch(args);
	}
}