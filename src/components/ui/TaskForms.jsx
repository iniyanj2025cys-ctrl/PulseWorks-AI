import { useForm } from 'react-hook-form';

function TaskForms() {
    const { register, handleSubmit, reset } = useForm();

    function onSubmit(data) {
        console.log("New Task Created:", data);
        reset();
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#BE9877] p-6">

            {/* Form Card */}
            <div className="w-full max-w-lg bg-[#F5E8D8] border border-[#9B6A45] rounded-2xl shadow-xl p-8">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-[#4E2A16] text-center mb-2">
                    Create New Task
                </h1>

                <p className="text-[#6E3511] text-center mb-6">
                    Assign and manage your team tasks
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Task Title */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-[#4E2A16]">
                            Task Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter task title"
                            {...register("title")}
                            className="w-full border border-[#C49A76] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6E3511]"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-[#4E2A16]">
                            Description
                        </label>

                        <textarea
                            placeholder="Describe the task..."
                            rows="4"
                            {...register("description")}
                            className="w-full border border-[#C49A76] rounded-lg p-3 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#6E3511]"
                        />
                    </div>

                    {/* Assigned Employee */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-[#4E2A16]">
                            Assigned Employee
                        </label>

                        <input
                            type="text"
                            placeholder="Enter employee name"
                            {...register("assignedEmployee")}
                            className="w-full border border-[#C49A76] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6E3511]"
                        />
                    </div>

                    {/* Priority */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-[#4E2A16]">
                            Priority
                        </label>

                        <select
                            {...register("priority")}
                            className="w-full border border-[#C49A76] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6E3511]"
                        >
                            <option value="">Select priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-[#4E2A16]">
                            Due Date
                        </label>

                        <input
                            type="date"
                            {...register("dueDate")}
                            className="w-full border border-[#C49A76] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6E3511]"
                        />
                    </div>

                    {/* Task Status */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-[#4E2A16]">
                            Task Status
                        </label>

                        <select
                            {...register("status")}
                            className="w-full border border-[#C49A76] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#6E3511]"
                        >
                            <option value="">Select task status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#6E3511] text-[#F5E8D8] font-semibold py-3 rounded-lg hover:bg-[#4E2A16] transition duration-300 shadow-md"
                    >
                        Create Task
                    </button>

                </form>
            </div>
        </div>
    );
}

export default TaskForms;