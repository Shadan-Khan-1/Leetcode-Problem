import java.util.Arrays;

public class ArrayRotation {
    public static int[] rotate(int[] nums, int k) {
        k = k % nums.length; // Handle cases where k is greater than array length
        int[] rotatedArray = new int[nums.length];

        // Copy the last k elements to the front of the new array
        for (int i = 0; i < k; i++) {
            rotatedArray[i] = nums[nums.length - k + i];
        }

        // Copy the rest of the elements
        for (int i = 0; i < nums.length - k; i++) {
            rotatedArray[k + i] = nums[i];
        }

        return rotatedArray;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6, 7};
        int k = 7;
        int[] rotated = rotate(nums, k);
        System.out.println(Arrays.toString(rotated)); // Output: [5, 6, 7, 1, 2, 3, 4]
    }
}
