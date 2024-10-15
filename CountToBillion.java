public class CountToBillion {
    public static void main(String[] args) {
        // Start the timer
        long startTime = System.currentTimeMillis();

        // Count up to 1 billion
        long count = 0;
        for (long i = 0; i < 1000000000; i++) {
            count++;
        }

        // End the timer
        long endTime = System.currentTimeMillis();

        // Calculate the time taken
        long elapsedTime = endTime - startTime;

        // Output the time taken
        System.out.println("Time taken to count to 1 billion: " + elapsedTime + " milliseconds");
    }
}
