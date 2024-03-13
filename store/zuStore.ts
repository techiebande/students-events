import { create } from "zustand";

type StateType = {
  createJob: {
    step: number;
    jobLocation: string;
    jobTimeRequirements: string;
    employmentDuration: string;
    duration: string;
    preferedJobApplicationSubmissionMethod: string;
    requiredApplicationDocuments: string;
  };
  nextStep: () => void;
  prevStep: () => void;
  changeJobLocation: (payload: string) => void;
  changeJobTimeRequirements: (payload: string) => void;
  changeEmploymentDuration: (payload: string) => void;
  changeDuration: (payload: string) => void;
  changePreferedJobApplicationSubmissionMethod: (payload: string) => void;
  changeRequiredApplicationDocuments: (payload: string) => void;
};

const useStore = create<StateType>((set) => ({
  createJob: {
    step: 1,
    jobLocation: "onsite",
    jobTimeRequirements: "full time",
    employmentDuration: "Permanent",
    duration: "1 - 3 months",
    preferedJobApplicationSubmissionMethod: "varyance",
    requiredApplicationDocuments: "Varyance student profile",
  },
  nextStep: () =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        step:
          state.createJob.step < 7
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
  changeJobTimeRequirements: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        jobTimeRequirements: payload,
      },
    })),
  changeEmploymentDuration: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        employmentDuration: payload,
      },
    })),
  changeDuration: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        duration: payload,
      },
    })),
  changePreferedJobApplicationSubmissionMethod: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        preferedJobApplicationSubmissionMethod: payload,
      },
    })),
  changeRequiredApplicationDocuments: (payload: string) =>
    set((state: StateType) => ({
      createJob: {
        ...state.createJob,
        requiredApplicationDocuments: payload,
      },
    })),
}));
export default useStore;
