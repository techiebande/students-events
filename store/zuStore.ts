import { create } from "zustand";

type StateType = {
  createJob: any;
  nextStep: () => void;
  prevStep: () => void;
  changeJobLocation: (payload: string) => void;
};

const useStore = create<StateType>((set) => ({
  createJob: {
    step: 1,
    jobLocation: "onsite",
  },
  nextStep: () =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        step:
          state.createJob.step < 2
            ? state.createJob.step + 1
            : state.createJob.step,
      },
    })),

  prevStep: () =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        step:
          state.createJob.step > 1
            ? state.createJob.step - 1
            : state.createJob.step,
      },
    })),
  changeJobLocation: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        jobLocation: payload,
      },
    })),
}));
export default useStore;
